require 'pry'

values = {
  1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2 => ["D", "G"],
  3 => ["B", "C", "M", "P"],
  4 => ["F", "H", "V", "W", "Y"],
  5 => ["K"],
  8 => ["J", "X"],
  10 => ["Q", "Z"]
}

score = 0

print "Gimme your word: "
word = gets.chomp

change = word.upcase.split('').each do | letter |

  values.each do | key, value |

    # we have refactored the code to be all on one line. We are also using 'value' which is that same as 'values[ key ]'
    score += key if value.include?( letter )

    # if values[key].include?( letter )
    #   score += key
    # end

  end

end

puts "Your word was '#{ word }', it's worth #{ score }."
