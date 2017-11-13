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

def advanced_menu
  puts "square root"
  puts "exponent"
  puts "(q) - quit!"
end

def prompt(message)
  print message
  gets.chomp #implicit return
end

################################################################################
##################################
### basic calculator functions ###
##################################

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
#####################################
### advanced calculator functions ###
#####################################

def square_function ( a )
  Math.sqrt( a )
end

def exp_function ( a, b )
  a ** b
end


def advanced_calculator
  advanced_menu
  advanced_choice = prompt('please enter your selection: ').downcase

  until advanced_choice == 'q'
    case advanced_choice
    when "square root"
      puts "enter your number: "
      num1 = gets.to_i
      puts square_function( num1 )
    when "exponent"
      puts "enter two numbers: "
      num1 = gets.to_i
      num2 = gets.to_i
      puts exp_function(num1, num2)
    else
      puts "INVALID SELECTION"
    end


    #show the advanced menu again
    advanced_menu

    #get the operations menu choices again
    advanced_choice = prompt('please enter your selection: ').downcase

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
  when 'a'
    advanced_calculator
  else
    puts "invalid selection"
  end

  # show the menu again
  main_menu
  # get the menu choice again
  menu_choice = prompt('please enter your selection: ').downcase
end

puts "thank you for using this terrible calculator"
