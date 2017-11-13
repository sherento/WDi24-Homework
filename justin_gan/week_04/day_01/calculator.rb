puts "welcome"

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
      a = prompt("Please enter a number: ").to_i
      b = prompt("Please enter the number you'd like to add: ").to_i
      puts "The result is #{ a + b }"
    when '2'
      a = prompt("Please enter a number: ").to_i
      b = prompt("Please enter the number you'd like to subtract: ").to_i
      puts "The result is #{ a - b }"
    when '3'
      a = prompt("Please enter a number: ").to_f
      b = prompt("Please enter the number you'd like to divide by: ").to_i
      puts "The result is #{ a / b }"
    when '4'
      a = prompt("Please enter a number: ").to_i
      b = prompt("Please enter the number you'd like to multiply by: ").to_i
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
      a = prompt("Please enter a number: ").to_i
      b = prompt("Please enter the number you'd like to raise #{ a } to the power of: ").to_i
      puts "The result is #{ a ** b }"
    when '2'
      a = prompt("Please enter a number to take the square root of: ").to_i
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
