
########### MENU DISPLAY FUNCTIONS #############################################

def main_menu
  puts "    MAIN MENU    "
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end

def basic_menu
  puts "    BASIC CALCULATION OPTIONS    "
  puts "(+) - add"
  puts "(-) - subtract"
  puts "(*) - multiply"
  puts "(/) - divide"
  puts "(q) - quit and return to main menu"
end

def advanced_menu
  puts "    ADVANCED CALCULATION OPTIONS    "
  puts "(s) - square root of"
  puts "(n) - positive nth root of"
  puts "(p) - power of"
  puts "(a) - sum all"
  puts "(q) - quit and return to main menu"
end


########## Prompt function ###################

def prompt( message )
  print message
  gets.chomp.downcase # implicit return
end

###### Display int where necessary function #########

def int_or_float( n )  # demo
  if (n - n.round).abs < 0.00000000001  # alternative n % 1 == 0, but this also helps with bad float maths
    n.round
  else
    return n
  end
end





########## CALCULATOR FUNCTIONS #################################################


def basic_calculator

  # ******* function definitions *******

  def add
    a = prompt("What is the first number you'd like to add? ").to_f
    b = prompt("What is the second number you'd like to add? ").to_f
    int_or_float a + b
  end

  def subtract
    a = prompt("What is the number you want to subtract FROM? ").to_f
    b = prompt("What is the number you'd like to subtract? ").to_f
    int_or_float a - b
  end

  def multiply
    a = prompt("What is the first number you'd like to multiply? ").to_f
    b = prompt("What is the second number you'd like to multiply? ").to_f
    int_or_float a * b
  end

  def divide
    a = prompt("What is the number you'd like to divide? ").to_f
    b = prompt("What is the divisor? ").to_f
    int_or_float a / b
  end

  # ------ UI ----------

  basic_menu
  operation = prompt('Please enter your selection: ')

  until 'q' == operation
    puts " You chose '#{ operation }'. Interesting choice."
    case operation
    when '+'
      puts "The result is #{ add }."
    when '-'
      puts "The result is #{ subtract }."
    when '*'
      puts "The result is #{ multiply }."
    when '/'
      puts "The result is #{ divide }."
    else
      puts " Shame that's an invalid selection."
    end

    basic_menu
    operation = prompt('Please enter your selection: ')
  end
  puts "-" * 40
end


# # #


def advanced_calculator

  # ******** function defs **********

  def sqr_root
    num = prompt('Find the square root of what number? ').to_f
    if num >= 0
      root = int_or_float Math.sqrt num
      return "#{ root } or #{ root * -1 }"
    else
      return "invalid. Sorry, you can only find the square root of a positive number"
    end
  end

  def nth_root
    base = prompt('What is your base number? ').to_f
    degree = prompt('What is your degree? ').to_f
    if base >= 0
      int_or_float base ** ( 1.0 / degree ) # demo
    else
      return "invalid. Sorry, I can only handle positive base numbers"
    end
  end

  def power
    a = prompt('What is your base number? ').to_f
    b = prompt('What is your exponent? ').to_f
    int_or_float a ** b
  end

  def sum_all # demo
    range = []
    while true
      input = prompt("Add a number (or just press enter to display your total): ") # didn't convert to float yet so can check if user hits enter
      break if input.empty?
      # if input.empty?
      #   break
      # end # n.b. if input.empty? break on one line didn't work
      input = input.to_f
      range << input  # add to end of array
    end
    sum = 0
    range.each do |n|
      sum += n
    end
    return int_or_float sum
  end

  # --------- UI ------------

  advanced_menu
  operation = prompt('Please make your selection: ')

  until 'q' == operation
    puts " You wrote '#{ operation }'. Interesting choice."
    case operation
    when 's'
      puts "The result is #{ sqr_root }." ## demo
    when 'n'
      puts "The result is #{ nth_root }."
    when 'p'
      puts "The result is #{ power }."
    when 'a'
      puts "The result is #{ sum_all }."
    else
      puts " Shame that's an invalid selection."
    end
    advanced_menu
    operation = prompt('Please make your selection: ')
  end
  puts "-" * 40
end



########################## RUN PROGRAM ######################################################

main_menu
menu_choice = prompt('Please enter your selection: ')


until menu_choice == 'q'
  # show the appropriate calculator
  case menu_choice
  when 'b'
    puts "-" * 40
    basic_calculator
  when 'a'
    puts "-" * 40
    advanced_calculator
  else
    puts "Invalid selection"
  end
    main_menu
    menu_choice = prompt('Please enter your selection: ')
end

puts "Thank you for using this terrible calculator."
