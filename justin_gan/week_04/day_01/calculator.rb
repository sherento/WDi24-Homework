class String
  def numeric?
    return true if self =~ /\A\d+\Z/
    true if Float(self) rescue false
  end
end

def validate_input(message)
  input = prompt(message)
  puts input.numeric?
  until input.numeric?
    puts "that isn't a number"
    input = prompt(message)
  end
  return input.to_f
end

def main_menu
  puts "(1) - basic calculator"
  puts "(2) - advanced calculator"
  puts "(q) - quit"
end

def prompt(message)
  print message
  gets.chomp
end

def basic_calculator_menu
  puts "(1) - add"
  puts "(2) - subtract"
  puts "(3) - divide"
  puts "(4) - multiply"
  puts "(q) - quit"
  prompt("Please enter your selection: ").downcase
end

def basic_calculator
  operation = basic_calculator_menu

  until operation == 'q'

    case operation
    when '1'
      a = validate_input("Please enter a number: ")
      b = validate_input("Please enter the number you'd like to add: ")
      puts "The result is #{ a + b }"
    when '2'
      a = validate_input("Please enter a number: ")
      b = validate_input("Please enter the number you'd like to subtract: ")
      puts "The result is #{ a - b }"
    when '3'
      a = validate_input("Please enter a number: ")
      b = validate_input("Please enter the number you'd like to divide by: ")
      puts "The result is #{ a / b }"
    when '4'
      a = validate_input("Please enter a number: ")
      b = validate_input("Please enter the number you'd like to multiply by: ").to_i
      puts "The result is #{ a * b }"
    end

    operation = basic_calculator_menu
  end
end

def advanced_calculator_menu
  puts "(1) - exponents"
  puts "(2) - square roots"
  puts "(q) - quit"
  prompt("Please enter your selection: ").downcase
end

def advanced_calculator
  operation = advanced_calculator_menu

  until operation == 'q'

    case operation
    when '1'
      a = validate_input("Please enter a number: ")
      b = validate_input("Please enter the number you'd like to raise #{ a } to the power of: ")
      puts "The result is #{ a ** b }"
    when '2'
      a = validate_input("Please enter a number to take the square root of: ")
      puts "The result is #{ Math.sqrt a }"
    end

    operation = advanced_calculator_menu

  end
end

############################################################

main_menu
menu_choice = prompt("Please enter your selection: ").downcase

until menu_choice == 'q'
  # Show the appropriate calculator
  case menu_choice
  when '1'
    basic_calculator
  when '2'
    advanced_calculator
  else
    puts "Invalid selection"
  end

  main_menu
  menu_choice = prompt "Please enter your selection: ".downcase
end

puts "Thank you for using this terrible calculator"
