### BONUS: BMI Calculator ###

# Calculate the body mass index (BMI) for an individual, given their height and weight


def bmi_calculator
  print "Let's find your BMI, first please tell us your weight in kg: "
  weight = gets.to_i
  # puts "You chose #{selection}"
  print "Next please tell us your height in cm: "
  height = (gets.to_f) / 100
  puts "your weight is #{weight} kg and your height is #{height} metres."
  bmi = weight / (height * height)
  puts "Your BMI is #{bmi}"

  if bmi < 18.5
    puts "You are underweight"
  elsif bmi >= 18.5 && bmi <= 24.9
    puts "You are in the healthy weight range"
  elsif bmi >= 25 && bmi <= 29.9
    puts "You are overweight"
  elsif bmi >= 30
    puts "You're considered obese"
  end
end

bmi_calculator
