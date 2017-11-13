
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

##########

def prompt(message)
  print message
  gets.chomp.downcase # implicit return
end

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

  until operation == 'q'
    puts " You chose '#{ operation }'. Great choice."
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


################################################################################

main_menu
menu_choice = prompt('Please enter your selection: ')


until menu_choice == 'q'
  # show the appropriate calculator
  case menu_choice
  when 'b'
    puts "-" * 40
    basic_calculator
  else
    puts "Invalid selection"
  end
    main_menu
    menu_choice = prompt('Please enter your selection: ')
end

puts "Thank you for using this terrible calculator"
