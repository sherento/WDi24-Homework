# def bmi_calculator

print "what is your weight in kg's?  "
weight = gets.to_i

print "what is your height in meteres and cm? eg 1.63  "
height = gets.to_f

# def bmi_calculator
calc_one = weight / height
bmi = (calc_one / height).round
puts "your bmi is #{ bmi }"

# def bmi_calculator
  if bmi >= 30
    "stop eating!!!"
  elsif bmi >= 25 && bmi <= 30
    "could do with one less chocolate a day"
  elsif bmi >= 18.5 && bmi <= 25
    "nice work champ"
  else
    "you can eat carbs now"
end
# end
