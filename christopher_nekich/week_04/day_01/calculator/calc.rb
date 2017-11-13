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
  puts "Basic Calculator Coming Soon"
end


main_menu
menu_choice = prompt "Please enter your selection: "

until menu_choice == "q"
  #show appropriate calculator
  case menu_choice
  when "b"
    basic_calculator
  else
    puts "Invalid Selection"
  end
  #show menu again
  main_menu
  #menu choice again
  menu_choice = prompt "Please enter your selection: "
end

puts "Thank you for using this terrible calculator"
