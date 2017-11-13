


def main_menu
  puts "    MAIN MENU    "
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end

def prompt(message)
  print message
  gets.chomp # implicit return
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
  puts "    BASIC CALCULATION OPTIONS    "
  puts "(+) - add"
  puts "(-) - subtract"
  puts "(*) - multiply"
  puts "(/) - divide"
  puts "(q) - quit and return to main menu"
  print "Make your choice NOW: "
  operation = gets.chomp.downcase

  until operation == 'q'
    puts " You chose '#{ operation }'. Great choice."
    print "What is the first number you want to perform this on? "
    first_num = gets.to_i
    print "What is the second number you want to perform this on? "
    second_num = gets.to_i
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
  puts "    BASIC CALCULATION OPTIONS    " # TODO make function, this is not DRY
  puts "(+) - add"
  puts "(-) - subtract"
  puts "(*) - multiply"
  puts "(/) - divide"
  puts "(q) - quit and return to main menu"
  print "Make your choice NOW: "
  operation = gets.chomp.downcase
  end
  puts "-" * 40
end


################################################################################

main_menu
menu_choice = prompt('Please enter your selection: ').downcase  # chaining here needs paren


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
    menu_choice = prompt('Please enter your selection: ').downcase
end

puts "Thank you for using this terrible calculator"
