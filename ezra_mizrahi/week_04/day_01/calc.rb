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

def add_function(a, b)
  a + b
end

def sub_function(a, b)
  a - b
end

def multiply_function(a, b)
  a * b
end

def div_function(a, b)
  a / b
end

def basic_calculator # should accept two arguments
  operations_menu
  operations_choice = prompt('please enter your selection: ').downcase

  until operations_choice == 'q'
    # show the appropriate operation
    case operations_choice
    when 'add'
      puts "enter two numbers to add: "
      num1 = gets.to_i
      num2 = gets.to_i
      puts add_function(num1, num2)
    when 'subtract'
      puts "enter two numbers to subtract: "
      num1 = gets.to_i
      num2 = gets.to_i
      puts sub_function(num1, num2)
    when 'multiply'
      puts "enter two numbers to multiply: "
      num1 = gets.to_i
      num2 = gets.to_i
      puts multiply_function(num1, num2)
    when 'divide'
      num1 = gets.to_i
      num2 = gets.to_i
      puts div_function(num1, num2)
    else
      puts 'INVALID SELECTION'
    end

    #show the operations menu again
    operations_menu

    #get the operations menu choices again
    operations_choice = prompt('please enter your selection: ').downcase

  end

end

puts "thank you for using this terrible calculator"

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
