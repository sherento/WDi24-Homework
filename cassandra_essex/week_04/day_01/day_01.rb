def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end


def prompt (message)
  print message
  gets.chomp #implicit return
end

def basic_calculator
  puts "(+) addition "
  puts "(-) subtraction  "
  puts "(*) multiplication "
  puts "(/) division "

  print "what is your calculation method "
  calculation_method = gets.downcase.chomp
end

case basic_calculator
when '+'
  print "enter your first number "
  first_number = gets.to_i
  print "enter your second number "
  second_number = gets.to_i
  addition = first_number + second_number
  puts addition

when '-'
  print "enter your first number "
  first_number = gets.to_i
  print "enter your second number "
  second_number = gets.to_i
  addition = first_number - second_number
  puts addition

when '*'
  print "enter your first number "
  first_number = gets.to_i
  print "enter your second number "
  second_number = gets.to_i
  addition = first_number * second_number
  puts addition

when '/'
  print "enter your first number "
  first_number = gets.to_i
  print "enter your second number "
  second_number = gets.to_i
  addition = first_number / second_number
  puts addition

end

#####################################################

main_menu
menu_choice = prompt('please send your selection: ').downcase

# puts "you choose :#{ menu_choice }"

until menu_choice == 'q'
#show the appropriate calculator
  case menu_choice
  when 'b'
    basic_calculator
  else
    puts "invalid selection"
  end

  main_menu
  menu_choice = prompt ('please send your selection:  ').downcase
end
  # show menu again
  # get menu choice again

# puts "thanks for using this calculator"
