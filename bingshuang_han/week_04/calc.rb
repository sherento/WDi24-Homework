def main_menu
  puts "(b) - basice calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end

def prompt(message)
  print message
  # return gets.chomp
  gets.chomp
end

def basic_calculator
  puts

end

############################################################################

main_menu
menu_choice = prompt "Please enter your selection:"

puts "You choose : #{menu_choice}"

until menu_choice =='q'
  # show the appropriate calculator
  case menu_choice
  when 'b'
    basic_calculator
  else
    puts "Invalid selection"

  end

  main_menu
  menu_choice = prompt "Please enter your selection:"

  # Show the menu again
  # Get the minu choice again

end
puts "Thank you for use"
