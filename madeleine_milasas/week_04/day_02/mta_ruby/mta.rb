require 'pry'
puts '-' * 40
puts "WELCOME TO THE MTA"
puts '-' * 40

############ LINES #########################

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
start_line = 'L'
start_stat = '8th Av'
end_line = 'L'
end_stat = '1st Av'



# find start line in train line
start_index = LINES[ start_line ].index( start_stat )
end_index = LINES[ end_line ].index( end_stat )


# get array of stops to go through
stops = LINES[ start_line ][ start_index + 1, end_index + 1 ]

#################################################################
# ------------ UI----------------- #
#################################################################



puts "You have entered:"
puts "  LINE ON  - #{ start_line }, STATION ON  - #{ start_stat }"
puts "  LINE OFF - #{ end_line }, STATION OFF - #{ end_stat }"
puts "You must travel through the following stops on the #{ start_line } line: #{ stops.join(', ') }."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
puts "#{ stops.size } stops in total. Enjoy your trip!"
puts '-' * 40














###########################################
#------------- Test cases ----------------#
###########################################

# test_cases = [
#   { :l_on => 'L', :s_on => '8th Av', :l_off => 'L', :s_off => '1st Av' },  # L line only, end to end fwds
#   { :l_on => 'L', :s_on => '1st Av', :l_off => 'L', :s_off => '8th Av' }  # L line only, end to end fwds
# ]





# ..fin
