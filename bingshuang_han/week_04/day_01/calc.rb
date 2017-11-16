=begin
Explanation

You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
Specification:

A user should be given a menu of operations
A user should be able to choose from the menu
A user should be able to enter numbers to perform the operation on
A user should be shown the result
This process should continue until the user selects a quit option from the menu
Phase 1

Calculator functionality
Calculator should be able to do basic arithmetic (+,-, *, /)
Phase 2

Advanced Calculator functionality
Calculator should be able to do basic arithmetic (exponents, square roots)
Bonus

Mortgage Calculator

Calculate the monthly required payment given the other variables as input (look up the necessary variables)

BMI Calculator

Calculate the body mass index (BMI) for an individual, given their height and weight

Trip Calculator

Calculate a trip time and cost given inputs for

distance
miles per gallon
price per gallon
speed in miles per hour
=end




def main_menu
  puts "(b) - basice calculator"
  puts "(a) - advanced calculator"
  puts "(m) - Mortgage calculator"
  puts "(bm) - BMI calculator"
  puts "(t) - Trip calculator"
  puts "(q) - quit"
end

def prompt(message)
  print message
  # return gets.chomp
  gets.chomp
end

def basic_calculator
  puts "Choose function + - * /:"
  flag = gets.chomp
  puts " please input 2 numbers: a,b"   # get the string
  numbers = gets.chomp.split(",")       # split into array

  num1 = numbers.first.to_i
  puts "your first number #{num1}"
  num2 = numbers.last.to_i
  puts "your second number #{num2}"

   puts "your flag #{flag}"
  case flag
  when "+"
    result = num1 + num2
  when "-"
    result = num1 - num2
  when "*"
    result = num1 * num2
  when "/"
    result = num1 / num2
  else
    result = "Not defined"
  end
  puts " The result is #{result}  "
end


def advanced_calculator
  puts "Choose function exponent,square roots: ex/sr"
  flag = gets.chomp.downcase

  case flag
  when "ex"
    puts " please input 2 numbers: a,b  a^b "   # get the string
    numbers = gets.chomp.split(",")       # split into array

    num1 = numbers.first.to_i
    puts "your first number #{num1}"
    num2 = numbers.last.to_i
    puts "your second number #{num2}"
    result = num1 ** num2
  when "sr"
    puts "Please input your number "
    num = gets.to_i
    result = Math.sqrt(num)
  else
    result = "Not defined"
  end
  puts " The result is #{result}  "

end

def mortgage_calculator
  puts "Please input your total loan amount and loan term (in months): "
  date = gets.chomp.split(",")
  loan_amount = date.first.to_f
  month = date.last.to_f
  puts "Please input the yearly interest rate "
  rate = gets.to_f/12
  result = loan_amount*rate*(1+rate)**month/( (1+rate)**month-1)
  puts "You should pay #{result.to_i} per month"
end

def bmi_calculator
  puts "Please input your body height m and weight kg"
  date = gets.chomp.split(",")
  height = date.first.to_f
  weight = date.last.to_f
  result = ( weight/(height**2)).to_i
  puts "Your body's BMI is #{result}"
end

def trip_calculator
  puts "Please input your distance in miles"
  distance = gets.to_f
  puts "Please input your speed in miles per hour"
  speed = gets.to_f
  puts "How many miles can you go per gallon"
  miles_per_gallon = gets.to_f
  puts "Please input price per gallon"
  price_per_gallon = gets.to_f
  hour = distance/speed
  cost = (distance/ miles_per_gallon * price_per_gallon).to_i
  puts "Your trip cost #{hour}hours  and $#{cost} ."


end

############################################################################

main_menu
menu_choice = prompt ( "Please enter your selection:").downcase

puts "You choose : #{menu_choice}"

until menu_choice =='q'
  # show the appropriate calculator
  case menu_choice
  when 'b'
    basic_calculator
  when "a"
    advanced_calculator
  when "m"
    mortgage_calculator
  when "bm"
    bmi_calculator
  when "t"
    trip_calculator


  else
    puts "Invalid selection"

  end

  main_menu
  menu_choice = prompt ("Please enter your selection:").downcase

  # Show the menu again
  # Get the minu choice again

end
puts "Thank you for use"
