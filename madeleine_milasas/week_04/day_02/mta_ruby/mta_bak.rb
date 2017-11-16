require 'pry'

puts '-' * 40
puts "WELCOME TO THE MTA"
puts '-' * 40



###########################################
#------------- LINES ---------------------#
###########################################



LINES = {  # making keys strings instead of Symbols for compat w user input
  'L' => ['8th Av', '6th Av', 'Union Square', '3rd Av', '1st Av'],
  'N' => ['Times Square', '34th', '28th (N)', '23rd (N)', 'Union Square', '8th St'],
  '6' => ['Grand Central', '33rd', '28th (6)', '23rd (6)', 'Union Square', 'Astor Place'], # not using :6 for future user input
  'A' => ['50th', 'Port', '23rd (A)', '8th Av', 'W 4th']
};

# ALL_LINES = LINES.keys


# ---------------- Prompt function --------------------- #
def prompt ( msg )
  print msg
  gets.chomp.upcase
end

# ---------------- * CALCULATE TRIP FUNCTIONS * ----------------- #

def print_entry ( lon, son, loff, soff )
  puts "You have entered:"
  puts "  LINE ON  - #{ lon }, STATION ON  - #{ son }"
  puts "  LINE OFF - #{ loff }, STATION OFF - #{ soff }"
end # print_entry

def first_leg ( lon, son, loff, soff )

      start_i = LINES[ lon ].index( son )
      end_i = LINES[ loff ].index( soff )

      if end_i > start_i
        stops = LINES[ lon ][ start_i + 1..end_i ]  # +1 to take to not list starting stop
      else
        stops = LINES[ lon ][ end_i..start_i - 1 ].reverse
      end

      puts "You must travel through the following stops on the #{ lon } line: #{ stops.join(', ') }."
      # puts "#{ stops.size } stops in total. Enjoy your trip!"
      puts '-' * 40

end # first_leg

def further_leg ( lon, son, loff, soff )

      start_i = LINES[ lon ].index( son )
      end_i = LINES[ loff ].index( soff )

      if end_i > start_i
        stops = LINES[ lon ][ start_i + 1..end_i ]  # +1 to take to not list starting stop
      else
        stops = LINES[ lon ][ end_i..start_i - 1 ].reverse
      end

      puts "Your journey continues through the following stops: #{ stops.join(', ') }."
      # puts "#{ stops.size } stops in total. Enjoy your trip!"
      puts '-' * 40

end # first_leg


# ---------------------------------------------------------------------------- #

def plan_trip ( lon, son, loff, soff )  # line on, station on, line off, station off

  print_entry lon, son, loff, soff

  # ONE LEG JOURNEY #

  if lon == loff

    first_leg lon, son, loff, soff

  else

    # MULTI LEG JOURNEY #

    # first version......#

    # # find intersections....
    # inter = []  # array to keep intersections
    # x = LINES[ lon ] & LINES[ loff ]
    # inter << x.first
    # puts "The intersection is #{ inter }"
    #
    # # CALC JOURNEY
    #
    # if inter == [ nil ]
    #   puts "No intersection"
    # end


    line_in_qu = lon # start with checking for intersects on starting line
    stops_in_qu = LINES[ lon ]
    x_line = []
    x_stat = []
    intercept = {} # using this one

    final_line = '' # init this variable for use in detecting if we've found whole path

    while (final_line != loff)
      #for each key/val pair in LINES obj
      LINES.each do |key, value|
        puts "Checking line #{ line_in_qu }..."
        # don't check against itself
        puts "... against line #{ key }"
        next if key == line_in_qu
        # look for intersection point
        found_x = value & stops_in_qu
        # AT THIS POINT, key is the LINE and found_x is an array with the STOP
        # ** if found an intersection
        if found_x != []
          puts "Intersection found"

          # ** if that intersecting line is the final line
          if loff == key
            puts "Match to final line"
            # CALCULATE FIRST LEG
            first_leg lon, son, lon, found_x.first
            puts "Change at #{ found_x.first } for the #{ key } line."
            # CALCULATE SECOND LEG
            further_leg key, found_x.first, loff, soff
            break
          else
            # or if intersections are not on final line..........
            # store poss intercepts
            intercept[ key ] = found_x.first
            p intercept
            line_in_qu = intercept.keys[0]
          end # if loff == key


        end # if found_x was nothin


        # if not, store all possible intersection
          # x_stat << found_x.first
          # x_line << key
          # puts "Intersecting lines: #{ x_line.last }"
          # puts "- with intersecting stations: #{ x_stat.last }"

        # final_line = x_line.last if x_line.last == loff
        puts "Ending while loop now"
        final_line = loff
      end # LINES.each

    end # while
    puts final_line
  end # multi-leg else

end # def plan_trip














###########################################
#------------- Test cases ----------------#
###########################################

# array of test cases
tests = [
  { :l_on => 'L', :s_on => '8th Av', :l_off => 'L', :s_off => '1st Av' },  # L line only, i.e. one line end to end fwds
  { :l_on => 'L', :s_on => '1st Av', :l_off => 'L', :s_off => '8th Av' },  # L line only, i.e. one line end to end backwards
  { :l_on => '6', :s_on => 'Grand Central', :l_off => '6', :s_off => 'Astor Place' },  # 6 line only, end to end fwds
  { :l_on => '6', :s_on => 'Astor Place', :l_off => '6', :s_off => 'Grand Central' },  # 6 line only, end to end backwards
  { :l_on => '6', :s_on => '33rd', :l_off => '6', :s_off => '23rd (6)' },  # partial trip, fwds
  { :l_on => '6', :s_on => 'Astor Place', :l_off => '6', :s_off => '28th (6)' },  # partial trip, backwards
  { :l_on => 'L', :s_on => '8th Av', :l_off => '6', :s_off => 'Grand Central' },  # L to 6 line, i.e. one change
  { :l_on => 'A', :s_on => '50th', :l_off => '6', :s_off => 'Grand Central' },  # A to 6 line, i.e. two changes
  { :l_on => '6', :s_on => '33rd', :l_off => 'A', :s_off => 'Port' }  # 6 to A line, i.e. two changes
]

# iterating through test cases
tests.each_with_index do |n, i|
  puts i + 1  # number the test cases for easy ref
  plan_trip n[:l_on], n[:s_on], n[:l_off], n[:s_off]
end














# ..fin
