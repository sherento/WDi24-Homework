
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

def prompt(message)
  print message
  gets.chomp.downcase # implicit return
end







########## CALCULATOR FUNCTIONS #################


def basic_calculator
  # ******* function definitions *******
  def add (a, b)
    a + b
  end
  def subtract (a, b)
    a - b
  end
  def multiply (a, b)
    a * b
  end
  def divide (a, b)
    a / b
  end
  # ------ UI ----------
  basic_menu
  operation = prompt('Please enter your selection: ')

  until 'q' == operation
    puts " You chose '#{ operation }'. Interesting choice."
    print "What is the first number you want to perform this on? "
    first_num = gets.to_f
    print "What is the second number you want to perform this on? "
    second_num = gets.to_f
    puts " Amazing work you're doing there, choosing #{ first_num } and #{ second_num }.\n Allow me to perform that operation..."

    case operation
    when '+'
      puts "The result is #{ add first_num, second_num }."
    when '-'
      puts "The result is #{ subtract first_num, second_num }."
    when '*'
      puts "The result is #{ multiply first_num, second_num }."
    when '/'
      puts "The result is #{ divide first_num, second_num }."
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
  end

  def nth_root
    a = prompt('What is your base number? ').to_f
    b = prompt('What is your degree? ').to_f
    result = a ** ( 1.0 / b ) ## demo
  end

  def power
    a = prompt('What is your base number? ').to_f
    b = prompt('What is your exponent? ').to_f
    result = a ** b
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
