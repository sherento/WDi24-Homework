
########### MENU DISPLAY FUNCTIONS ####################

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
  puts "(n) - nth root of"
  puts "(p) - power of"
  puts "(q) - quit and return to main menu"
end


########## Prompt function ###################

def prompt( message )
  print message
  gets.chomp.downcase # implicit return
end

######

def check_if_int( n )
  if (n - n.round).abs < 0.00000000001 # demo. alternative n % 1 == 0
    n.round
  else
    return n
  end
end





########## CALCULATOR FUNCTIONS #################


def basic_calculator

  # ******* function definitions *******

  def add
    a = prompt("What is the first number you'd like to add? ").to_f
    b = prompt("What is the second number you'd like to add? ").to_f
    check_if_int( a + b )
  end

  def subtract
    a = prompt("What is the number you want to subtract FROM? ").to_f
    b = prompt("What is the number you'd like to subtract? ").to_f
    check_if_int( a - b )
  end

  def multiply
    a = prompt("What is the first number you'd like to multiply? ").to_f
    b = prompt("What is the second number you'd like to multiply? ").to_f
    check_if_int( a * b )
  end

  def divide
    a = prompt("What is the number you'd like to divide? ").to_f
    b = prompt("What is the divisor? ").to_f
    check_if_int( a / b )
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
    result = Math.sqrt num
    check_if_int( result )
  end

  def nth_root
    a = prompt('What is your base number? ').to_f
    b = prompt('What is your degree? ').to_f
    result = a ** ( 1.0 / b ) ## demo
    check_if_int( result )
  end

  def power
    a = prompt('What is your base number? ').to_f
    b = prompt('What is your exponent? ').to_f
    result = a ** b
    check_if_int( result )
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

puts "Thank you for using this terrible calculator"
