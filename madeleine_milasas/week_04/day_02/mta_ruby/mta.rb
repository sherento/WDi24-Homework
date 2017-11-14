require 'pry'
puts '-' * 40
puts "WELCOME TO THE MTA"
puts '-' * 40



###########################################
#------------- Test cases ----------------#
###########################################

tests = [
  { :l_on => 'L', :s_on => '8th Av', :l_off => 'L', :s_off => '1st Av' },  # L line only, end to end fwds
  { :l_on => 'L', :s_on => '1st Av', :l_off => 'L', :s_off => '8th Av' }  # L line only, end to end fwds
]


###########################################
#------------- LINES      ----------------#
###########################################



LINES = {  # making keys strings instead of Symbols for compat w user input
  'L' => ['8th Av', '6th Av', 'Union Square', '3rd Av', '1st Av'],
  'N' => ['Times Square', '34th', '28th (N)', '23rd (N)', 'Union Square', '8th St'],
  '6' => ['Grand Central', '33rd', '28th (6)', '23rd (6)', 'Union Square', 'Astor Place'], # doesn't need :6
  'A' => ['50th', 'Port', '23rd (A)', '8th Av', 'W 4th']
};

# ALL_LINES = LINES.keys


# ---------------- Prompt function --------------------- #
def prompt (msg)
  print msg
  gets.chomp.upcase
end

# ---------------- * CALCULATE TRIP FUNCTIONS * --------------------- #

# test variables
# start_line = 'L'
# start_stat = '8th Av'
# end_line = 'L'
# end_stat = '1st Av'
#



def plan_trip ( lon, son, loff, soff )  # line on, station on, line off, station off

  if lon == loff
      # find start line in train line
      start_index = LINES[ lon ].index( son )
      end_index = LINES[ loff ].index( soff )

      # get array of stops to go through
      stops = LINES[ lon ][ start_index + 1, end_index + 1 ]

      puts "You have entered:"
      puts "  LINE ON  - #{ lon }, STATION ON  - #{ son }"
      puts "  LINE OFF - #{ loff }, STATION OFF - #{ soff }"
      puts "You must travel through the following stops on the #{ lon } line: #{ stops.join(', ') }."
      puts "#{ stops.size } stops in total. Enjoy your trip!"
      puts '-' * 40
  end
end




tests.each do |n|
  plan_trip n[:l_on], n[:s_on], n[:l_off], n[:s_off]
end














# ..fin
