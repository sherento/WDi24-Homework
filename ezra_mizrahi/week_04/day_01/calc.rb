def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit!"
end

def operations_menu
  puts "add"
  puts "subtract"
  puts "multiply"
  puts "divide"
  puts "(q) - quit!"
end

def prompt(message)
  print message
  gets.chomp #implicit return
end

def sum_function(n1, n2)
  n1 + n2
end

def sub_function(n1, n2)
  n1 - n2
end

def multiply_function(n1, n2)
  n1 * n2
end

def div_function(n1, n2)
  n1 / n2
end

def basic_calculator # should accept two arguments
  operations_menu
  operations_choice = prompt('please enter your selection: ').downcase
end

################################################################################

main_menu

menu_choice = prompt('please enter your selection: ').downcase

until menu_choice == 'q'
  # show the appropriate calculator
  case menu_choice
  when 'b'
    basic_calculator
  else
    puts "invalid selection"
  end

  # show the menu again
  main_menu
  # get the menu choice again
  menu_choice = prompt('please enter your selection: ').downcase
end

puts "thank you for using this terrible calculator"
