################################################################################
###### MTA #####################################################################
################################################################################

###############
# subway lines

line_n = [ 'Times Square', '34th', '28th N', '23rd N', 'Union Square', '8th N' ]

line_l = [ '8th L', '6th', 'Union Square', '3rd', '1st' ]

line_6 = [ 'Grand Central', '33rd', '28th 6', '23rd 6', 'Union Square', 'Astor Place' ]

##############
# take the line and stop the user is getting on at,
# and the line and stop that the user is getting off at,
# and print the journey and total number of stops for the trip
# e.g.
# plan_trip 'N', 'Times Square', '6', '33rd'
# "you must travel through the following stops on the N line: 23rd...33rd"
# 7 stops in total



# function to list and sum stops on a single line
# it should get the index of the start station and index of the end station
# and produce a string which contains the stops of the trip
# ...
# if the trip starts towards or at the end of a line (i.e. end of the array)
# then reverse the lines and get the new index values and proceed as above

def list_stations ( line_start, stn_start, line_end, stn_end )

  first_stn = line_start.find_index(stn_start) #get index of first stop
  last_stn = line_end.find_index(stn_end) #get index of last stop

  if first_stn < last_stn #if travelling forward on line
    array_of_stns = line_start[first_stn, last_stn].size # sums stops
    list_of_stns = line_start[first_stn, last_stn].join(", ")
    puts "You must travel on the following stops: #{ list_of_stns } to reach #{ stn_end }."
    puts "This is a total of #{ array_of_stns + 1 } stations."
  elsif first_stn > last_stn #if travelling backwards on line
    reversed_line = line_start.reverse
    rev_start = line_start.reverse.find_index(stn_start)
    rev_end = line_end.reverse.find_index(stn_end)
    rev_array_of_stns = reversed_line[rev_start, rev_end].size # sums stops
    rev_string_of_stns = reversed_line[rev_start, rev_end].join(", ")
    puts "You must travel on the following stops: #{ rev_string_of_stns } to reach #{ stn_end }."
    puts "This is a total of #{ rev_array_of_stns } stations."
  end

end


# if line_start does not equal line_end
#   do transfer function
# transfer function goes from stn start to union square
# it then prints those stops and sums them
# it then goes from union square of the next line until the end station

def transfer ( line_start, stn_start, line_end, stn_end )
  #### first half of transfer
  # gets index of first station
  first_stn = line_start.find_index(stn_start)
  union_sq_1 = line_start.find_index("Union Square")
  # lists stations
  first_half_transfer = line_start[first_stn, union_sq_1].join(", ")
  # sums stations
  first_half_sum = line_start[first_stn, union_sq_1].size
  puts "You must travel on the following stations: #{ first_half_transfer } and then transfer at Union Square."
  puts "This is a total of #{ first_half_sum } stations."
  #### first half of transfer
  #
  #### second half of transfer
  # gets index of second half of transfer stations
  union_sq_2 = line_end.find_index("Union Square")
  last_stn = line_end.find_index(stn_end)
  # lists stations
  second_half_transfer = line_end[union_sq_2, last_stn].join(", ")
  # sums stations
  second_half_sum = line_end[union_sq_2, last_stn].size
  puts "You must travel on the following stations: #{ second_half_transfer } to reach #{ stn_end }."
  puts "This is a total of #{ second_half_sum } stations."
end

def reverse_transfer ( line_start, stn_start, line_end, stn_end )
  #### first half of transfer
  #### reverse line_start
  rev_line_start = line_start.reverse
  #### get index of first station
  first_stn = line_start.reverse.find_index(stn_start)
  union_sq_1 = line_start.reverse.find_index("Union Square")
  #### list stations
  first_half_transfer = rev_line_start[first_stn, union_sq_1].join(", ")
  #### sums stations
  first_half_sum = line_start[first_stn, union_sq_1].size
  puts "You must travel on the following stations: #{ first_half_transfer } and then transfer at Union Square."
  puts "This is a total of #{ first_half_sum } stations."
  #### second half of transfer
  #### reverse line_end
  rev_line_end = line_end.reverse
  #### get index of last station
  last_stn = line_end.reverse.find_index(stn_end)
  union_sq_2 = line_end.reverse.find_index("Union Square")
  #### list stations
  second_half_transfer = rev_line_end[union_sq_2, last_stn].join(", ")
  #### sums stations
  second_half_sum = line_end[union_sq_2, last_stn].size
  puts "You must travel on the following stations: #{ second_half_transfer } to reach #{ stn_end }."
  puts "This is a total of #{ second_half_sum } stations."
end

puts reverse_transfer line_l, '1st', line_n, '28th N'

# main plan trip method
# compares if start and end lines are the same or different, and decides
# which method to use based on this
def plan_trip line_start, stn_start, line_end, stn_end
  if line_start == line_end
    list_stations( line_start, stn_start, line_end, stn_end )
  elsif line_start != line_end and line_start.find_index(stn_start) > line_start.find_index("Union Square")
    reverse_transfer( line_start, stn_start, line_end, stn_end)
  elsif line_start != line_end
    transfer( line_start, stn_start, line_end, stn_end )
  end
end

# one line trip going forward
plan_trip line_n, 'Times Square', line_n, '23rd N'

# one line trip going backwards
plan_trip line_n, '23rd N', line_n, 'Times Square'

# multi line trip going forward
plan_trip line_n, 'Times Square', line_l, '3rd'

# multi line trip going backwards
plan_trip line_l, '1st', line_n, '28th N'
