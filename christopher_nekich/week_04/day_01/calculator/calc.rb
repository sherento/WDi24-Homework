def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end

def prompt(message)
  print message
  gets.chomp.downcase # Implicit return
end

def basic_calculator
  operation = prompt "Pick an operator (+, -, *, /): "
  case operation
  when "+"
    num1 = prompt("Enter a number: ").to_i
    num2 = prompt("Enter a number to add to the first: ").to_i

    puts "#{num1} + #{num2} = #{num1 + num2}"

  when "-"
    num1 = prompt("Enter a number: ").to_i
    num2 = prompt("Enter a number to take away from the first: ").to_i

    puts "#{num1} - #{num2} = #{num1 - num2}"

  when "*"
    num1 = prompt("Enter a number: ").to_i
    num2 = prompt("Enter a number to multiply by the first: ").to_i

    puts "#{num1} * #{num2} = #{num1 * num2}"

  when "/"
    num1 = prompt("Enter a number: ").to_i
    num2 = prompt("Enter a number to divide the first by: ").to_i

    puts "#{num1} / #{num2} = #{num1 / num2}"

  else
    puts "Invalid operator"
  end
end


def advanced_calculator
  puts "(sq) - Find the square root of a number"
  puts "(ex) - Find the exponent of a number"
  operation = prompt("Please enter your selection: ").downcase

  case operation
  when "sq"
    num = prompt("Enter a number: ").to_i
    puts "The square root of #{num} is #{Math.sqrt(num)}"

  when "ex"
    num = prompt("Enter a number: ").to_i
    num2 = prompt("Enter an exponent: ").to_i

    puts "#{num} to the power of #{num2} is #{num ** num2}"
  else
    puts "Invalid Selection"
  end
end



main_menu
menu_choice = prompt "Please enter your selection: "

until menu_choice == "q"
  #show appropriate calculator
  case menu_choice
  when "b"
    basic_calculator
  when "a"
    advanced_calculator
  else
    puts "Invalid Selection"
  end
  #show menu again
  main_menu
  #menu choice again
  menu_choice = prompt "Please enter your selection: "
end

puts "Thank you for using this terrible calculator"
