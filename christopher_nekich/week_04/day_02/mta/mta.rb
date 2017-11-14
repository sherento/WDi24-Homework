require 'pry'

$lines = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}



def prompt(message)
  print message
  gets.chomp
end

def plan_trip
  p $lines.keys
  start_line = prompt("Enter your train line: ").upcase
  puts $lines[line]
  start = prompt("Enter your starting station: ")
  start_index = $lines[line].index start
  puts $lines[line]
  p $lines.keys
  finish_line = prompt("Enter the line your destination is on: ")
  finish = prompt("Enter your destination: ")
  finish_index = $lines[line].index finish

  stops = (start_index - finish_index).abs
  stations = ($lines[line][start_index..finish_index]).drop(1)
  puts "You must travel through the following stops on the #{line} line: #{stations.join(", ")}."
  puts "#{stations.length} stops in total."

end


plan_trip
