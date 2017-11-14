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


## Global variable for counting stops ##
$stops_count = 0;


# ---------------- Prompt function (hopeful) --------------------- #
# def prompt ( msg )
#   print msg
#   gets.chomp.upcase
# end

# --------------------------------------------------------------- #
# ---------------- * CALCULATE TRIP FUNCTIONS * ----------------- #
# --------------------------------------------------------------- #

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
      $stops_count += stops.size

end # first_leg

def further_leg ( lon, son, loff, soff )

      start_i = LINES[ lon ].index( son )
      end_i = LINES[ loff ].index( soff )

      if end_i > start_i
        stops = LINES[ lon ][ start_i + 1..end_i ]  # +1 to take to not list starting stop
      else
        stops = LINES[ lon ][ end_i..start_i - 1 ].reverse
      end
      puts "Change at #{ son } for the #{ loff } line."
      puts "Your journey continues through the following stops: #{ stops.join(', ') }."
      $stops_count += stops.size

end # first_leg


def print_stops
      puts "#{ $stops_count } stops in total. Enjoy your trip, wow, that's great for you."
      puts '-' * 40
      $stops_count = 0  # set back to zero so count doesn't accum w each trip calc
end


# ---------------------------------------------------------------------------- #

def plan_trip ( lon, son, loff, soff )  # line on, station on, line off, station off

  print_entry lon, son, loff, soff

  # ONE LEG JOURNEY #

  if lon == loff

    first_leg lon, son, loff, soff
    print_stops

  else

    # MULTI LEG JOURNEY #

    line_in_qu = lon # start with checking for intersects on starting line
    stops_in_qu = LINES[ lon ]
    # x_line = []
    # x_stat = []
    intercept = {}

    # final_line = '' # init this variable for use in detecting if we've found whole path

    # count = 0
    finished = false

      #for each key/val pair in LINES obj
      LINES.each do |key, value|
        # puts "Checking line #{ line_in_qu }..."
        # don't check against itself
        # puts "... against line #{ key }"
        next if key == line_in_qu
        # look for intersection point
        found_x = value & stops_in_qu
        # AT THIS POINT, key is the LINE and found_x is an array with the STOP
        # ** if found an intersection
        if found_x != []
          # puts "Intersection found"
          # ** if that intersecting line is the final line
          if loff == key
            # puts "Match to final line"
            # CALCULATE FIRST LEG
            first_leg lon, son, lon, found_x.first
            further_leg key, found_x.first, loff, soff
            print_stops
            finished = true
            break
          else
            # # if 3 legs
            # puts "3 legs needed"
            # store intersecting line found
            intercept[ key ] = found_x.first
          end # if matching end line
        end # if found intersecion
        # puts "Ending that iteration now..."
      end # LINES.each

      if finished == false
        # repeat again comparing end line to intercept lines
        # puts "Journey is more than 2 legs"
        line_in_qu = loff
        stops_in_qu = LINES[ loff ]

        intercept.each do |key, value|
          next if key == line_in_qu
          found_x = LINES[ key ] & stops_in_qu
          if found_x != []
            first_leg lon, son, lon, value
            further_leg key, value, key, found_x.first
            further_leg loff, found_x.first, loff, soff
            print_stops
            finished = true
            break
          end # if found_x != []
        end # intercept.each

      end # finished is false

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
  { :l_on => 'A', :s_on => '50th', :l_off => '6', :s_off => 'Grand Central' }  # A to 6 line, i.e. two changes
]

# iterating through test cases
tests.each_with_index do |n, i|
  puts i + 1  # number the test cases for easy ref
  plan_trip n[:l_on], n[:s_on], n[:l_off], n[:s_off]
end














# ..fin
