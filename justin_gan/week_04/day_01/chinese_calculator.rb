require 'language_converter'
require 'humanize'

class String
  def numeric?
    return true if self =~ /\A\d+\Z/
    true if Float(self) rescue false
  end
end

def validate_input(message)
  input = prompt(message)
  until input.numeric?
    puts "that isn't a number"
    input = prompt(message)
  end
  return input.to_i
end

def main_menu
  puts "(1) - basic calculator"
  puts "(2) - advanced calculator"
  puts "(q) - quit"
  prompt("Please enter your selection: ").downcase
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
      translated_result = lc( (a + b).humanize, 'zh' )
      puts "The result is #{ translated_result }"
    when '2'
      a = validate_input("Please enter a number: ")
      b = validate_input("Please enter the number you'd like to subtract: ")
      translated_result = lc( (a - b).humanize, 'zh' )
      puts "The result is #{ translated_result }"
    when '3'
      a = validate_input("Please enter a number: ")
      b = validate_input("Please enter the number you'd like to divide by: ")
      translated_result = lc( (a / b).humanize, 'zh' )
      puts "The result is #{ translated_result }"
    when '4'
      a = validate_input("Please enter a number: ")
      b = validate_input("Please enter the number you'd like to multiply by: ")
      translated_result = lc( (a * b).humanize, 'zh' )
      puts "The result is #{ translated_result }"
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
      translated_result = lc( (a ** b).humanize, 'zh' )
      puts "The result is #{ translated_result }"
    when '2'
      a = validate_input("Please enter a number to take the square root of: ")
      translated_result = lc( (Math.sqrt a).humanize, 'zh' )
      puts "The result is #{ translated_result }"
    end

    operation = advanced_calculator_menu

  end
end

############################################################

menu_choice = main_menu

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

  menu_choice = main_menu
end

puts "Thank you for using this terrible calculator"
