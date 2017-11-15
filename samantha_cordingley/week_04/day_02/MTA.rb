# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# plan_trip 'N', 'Times Square', '6', '33rd' This is only a suggested function name and signature

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

MTA = {
  :n_line => ["times square", "34th", "28th", "23rd", "union square", "8th"],
  :l_line => ["8th", "6th", "union square", "3rd", "1st"],
  :six_line => ["grand central", "33rd", "28th", "23rd", "union square", "astor place"],
}

# print MTA
# MTA[:n_line]
# MTA[:n_line][0]

########################NORMAL FUNCTION#######################

def plan_trip(start_line, start_stop, end_line, end_stop)
  start_line_position = MTA[start_line].index(start_stop)
  end_line_position = MTA[end_line].index(end_stop)
  trip_length = end_line_position - start_line_position
  user_journey = MTA[start_line][(start_line_position +1)...end_line_position]
  # puts user_journey
  # puts start_line_position
  # puts end_line_position
  # puts trip_length
  puts "Your trip is #{trip_length} stops in length. Start at the #{start_line}, and get on at platform #{start_stop}. Travel through stops #{user_journey} ,and get off at #{end_stop}."
end

# plan_trip :n_line, '34th', :n_line, '8th' #forward on one line test

# ############REVERSE FUNCTION####################

def backwards_trip(start_line, start_stop, end_line, end_stop)
  new_line = MTA[start_line].reverse
  start_line_position = new_line.index(start_stop)
  end_line_position = new_line.index(end_stop)
  trip_length = end_line_position - start_line_position
  user_journey = new_line[(start_line_position + 1)...end_line_position]
  # puts user_journey
  # puts new_line
  # puts start_line_position
  # puts end_line_position
  # puts trip_length
  puts "Your trip is #{trip_length} stops in length. Start at the #{start_line}, and get on at platform #{start_stop}. Travel through stops #{user_journey} ,and get off at #{end_stop}."
end


# backwards_trip :n_line, 'union square', :n_line, '34th' #backwards on one line


################MULTI LINE BOTH FORWARDS#########################

def plan_multi_trip(start_line, start_stop, end_line, end_stop)
  start_line_position = MTA[start_line].index(start_stop)
  end_line_position = MTA[end_line].index(end_stop)
  if start_line != end_line
    first_leg = []
    second_leg = []

    MTA[start_line].each do | el |
  if MTA[start_line].index(el) <= MTA[start_line].index('union square') && MTA[start_line].index(el) > MTA[start_line].index(start_stop)
    first_leg.push(el)
  end
end

# print first_leg

MTA[end_line].reverse.each do | el |
  if el == 'union square'
    break;
  else
    second_leg.push(el)
    end
  end
  # print second_leg.reverse!
end

total_journey = first_leg + second_leg
# print total_journey

puts "Your trip is #{total_journey.size} stops in length. Start at the #{start_line}, and get on at platform #{start_stop}. Travel through stops: "
total_journey.map! do | el |
  if el == 'union square'
    puts "Change at union square."
    puts "Get on the #{end_line}."
    puts "Continue on: "
  elsif el != 'union square'
    puts el
  end
end
  puts "Get off at #{end_stop}."
end

# plan_multi_trip :n_line, '34th', :l_line, '3rd' #changing at union sq and going forward
# plan_multi_trip :six_line, '33rd', :n_line, '8th' #changing at union sq and going forward

######################MULTI LINE START LINE FORWARDS, END LINE BACKWARDS############################

def plan_multi_startforwards(start_line, start_stop, end_line, end_stop)
  start_line_position = MTA[start_line].index(start_stop)
  end_line_position = MTA[end_line].index(end_stop)
  if start_line != end_line
    first_leg = []
    new_reverse_line = []
    second_leg = []

    MTA[start_line].each do | el |
  if MTA[start_line].index(el) <= MTA[start_line].index('union square') && MTA[start_line].index(el) > MTA[start_line].index(start_stop)
    first_leg.push(el)
  end
end
# print first_leg

new_reverse_line = MTA[end_line].reverse!
# print new_reverse_line
start_line_position = new_reverse_line.index('union square')
end_line_position = new_reverse_line.index(end_stop)
second_leg = new_reverse_line[(start_line_position +1)...end_line_position]
end

total_journey = first_leg + second_leg
# print total_journey

puts "Your trip is #{total_journey.size} stops in length. Start at the #{start_line}, and get on at platform #{start_stop}. Travel through stops: "
total_journey.map! do | el |
  if el == 'union square'
    puts "Change at union square."
    puts "Get on the #{end_line}."
    puts "Continue on: "
  elsif el != 'union square'
    puts el
  end
end
  puts "Get off at #{end_stop}."
end

# plan_multi_startforwards :n_line, '28th', :six_line, '28th' #starting in forwards motion, changing at union sq and going backwards
# plan_multi_startforwards :six_line, '23rd', :l_line, '8th' #starting in forwards motion, changing at union sq and going backwards


######################MULTI LINE START LINE BACKWARDS, END LINE FORWARDS############################

def plan_multi_startbackwards(start_line, start_stop, end_line, end_stop)
  start_line_position = MTA[start_line].index(start_stop)
  end_line_position = MTA[end_line].index(end_stop)
  if start_line != end_line
    first_leg = []
    new_reverse_line = []
    second_leg = []

    new_reverse_line = MTA[start_line].reverse!
    # print new_reverse_line
    reverse_start_position = new_reverse_line.index(start_stop)
    reverse_end_position = new_reverse_line.index('union square')
    first_leg = new_reverse_line[(reverse_start_position +1)...reverse_end_position]
  end

# print first_leg

    MTA[end_line].each do | el |
  if MTA[end_line].index(el) >= MTA[end_line].index('union square') && MTA[end_line].index(el) <= MTA[end_line].index(end_stop)
    second_leg.push(el)
  end
end

# print second_leg


total_journey = first_leg + second_leg
# print total_journey

puts "Your trip is #{total_journey.size} stops in length. Start at the #{start_line}, and get on at platform #{start_stop}. Travel through stops: "
total_journey.map! do | el |
  if el == 'union square'
    puts "Change at union square."
    puts "Get on the #{end_line}."
    puts "Continue on: "
  elsif el != 'union square'
    puts el
  end
end
  puts "Get off at #{end_stop}."
end

# plan_multi_startbackwards :l_line, '1st', :n_line, '8th' #starting line going backwards, changing at union sq and going forwards
# plan_multi_startbackwards :n_line, '8th', :l_line, '3rd' #starting line going backwards, changing at union sq and going forwards

######################MULTI LINE BOTH BACKWARDS############################

def plan_multi_bothbackwards(start_line, start_stop, end_line, end_stop)
  if start_line != end_line
    first_leg = []
    first_reverse_line = []
    second_reverse_line = []
    second_leg = []

    first_reverse_line = MTA[start_line].reverse!
    # print first_reverse_line
    reverse_start_position = first_reverse_line.index(start_stop)
    reverse_end_position = first_reverse_line.index('union square')
    first_leg = first_reverse_line[(reverse_start_position +1)...reverse_end_position]

# print first_leg

  second_reverse_line = MTA[end_line].reverse!
  # print second_reverse_line
  start_line_position = second_reverse_line.index('union square')
  end_line_position = second_reverse_line.index(end_stop)
  second_leg = second_reverse_line[start_line_position...(end_line_position +1)]
end
# print second_leg

total_journey = first_leg + second_leg
# print total_journey

puts "Your trip is #{total_journey.size} stops in length. Start at the #{start_line}, and get on at platform #{start_stop}. Travel through stops: "
total_journey.map! do | el |
  if el == 'union square'
    puts "Change at union square."
    puts "Get on the #{end_line}."
    puts "Continue on: "
  elsif el != 'union square'
    puts el
  end
end
  puts "Get off at #{end_stop}."
end

# plan_multi_bothbackwards :six_line, 'astor place', :n_line, '28th' #starting line going backwards, changing at union sq and second line going backwards
#
# plan_multi_bothbackwards :l_line, '1st', :six_line, '28th' #starting line going backwards, changing at union sq and second line going backwards

#######################MASTER FUNCTION########################################

def master_planner(start_line, start_stop, end_line, end_stop)
  first_line_st_position = MTA[start_line].index(start_stop)
  first_line_end_position = MTA[start_line].index('union square')
  second_line_st_position = MTA[end_line].index('union square')
  second_line_end_position = MTA[end_line].index(end_stop)
  # puts first_line_st_position
  # puts first_line_end_position
  # puts second_line_st_position
  # puts second_line_end_position


  if start_line == end_line && (first_line_st_position < first_line_end_position)
    plan_trip start_line, start_stop, end_line, end_stop
  elsif start_line == end_line && (first_line_st_position > first_line_end_position)
    backwards_trip start_line, start_stop, end_line, end_stop
  elsif start_line != end_line && (first_line_st_position < first_line_end_position) && (second_line_st_position < second_line_end_position)
    plan_multi_trip start_line, start_stop, end_line, end_stop
  elsif start_line != end_line && (first_line_st_position < first_line_end_position) && (second_line_st_position > second_line_end_position)
    plan_multi_startforwards start_line, start_stop, end_line, end_stop
  elsif start_line != end_line && (first_line_st_position > first_line_end_position) && (second_line_st_position < second_line_end_position)
    plan_multi_startbackwards start_line, start_stop, end_line, end_stop
  elsif start_line != end_line && (first_line_st_position > first_line_end_position) && (second_line_st_position > second_line_end_position)
    plan_multi_bothbackwards start_line, start_stop, end_line, end_stop
  else
    puts "I don't understand, please try again"
  end
end

master_planner(:n_line, '34th', :n_line, '8th') #forward on one line test
master_planner(:n_line, 'union square', :n_line, '34th') #backwards on one line
master_planner(:n_line, '34th', :l_line, '3rd') #changing at union sq and going forward
master_planner(:n_line, '28th', :six_line, '28th') #starting in forwards motion, changing at union sq and going backwards
master_planner(:l_line, '1st', :n_line, '8th') #starting line going backwards, changing at union sq and going forwards
master_planner(:l_line, '1st', :six_line, '28th') #starting line going backwards, changing at union sq and second line going backwards
master_planner(:six_line, 'astor place', :n_line, '34th') #starting line going backwards, changing at union sq and second line going backwards

######################INPUT FROM USER########################################

# def trip_info
#   print "What is your start line? "
#   start_line = gets.chomp
#   print "What is your start stop? "
#   start_stop = gets.chomp
#   print "What is your end line? "
#   end_line = gets.chomp
#   print "What is your end stop? "
#   end_stop = gets.chomp
#   print "Your trip starts at #{start_line}, #{start_stop} and ends at #{end_line}, #{end_stop}."
#   print $user_trip = [start_line, start_stop, end_line, end_stop]
#
# end
#
# trip_info


###############EACH LOOP SYNTAX#####################
#   array.each do |item|
#   puts "The current array item is: #{item}"
# end
