require 'pry'

def plan_trip( start_line, start_station, end_line, end_station )
  start_index = get_station_index( SUBWAY[ start_line ], start_station )
  end_index = get_station_index( SUBWAY[ end_line ], end_station )

  if start_line == end_line
    p get_journey_leg( SUBWAY[ start_line ], start_index, end_index, end_station )
  else
    p "figure out 2 lines"
    
  end
end

def get_station_index( line, station )
  line.index( station )
end

def get_journey_leg( line, start_index, end_index, end_station )
  if start_index == end_index
    "You're already at #{ end_station } station."
  elsif start_index < end_index
    travel_east( line, start_index, end_index )
  else
    travel_west( line, start_index, end_index )
  end
end

def travel_east( line, start_index, end_index )
  passed_stations = line[start_index..end_index]
end

def travel_west( line, start_index, end_index )
  # end index is smaller if travelling west
  passed_stations = line[end_index..start_index].reverse
end

SUBWAY = {
  :N => [ "Times Square", "34th", "28th (N)", "23rd (N)", "Union Square", "8th (N)"],
  :L => [ "8th (L)", "6th", "Union Square", "3rd", '1st' ],
  6 => [ "Grand Central", "33rd", "28th (6)", "23rd (6)", "Union Square", "Astor Place" ]
}


plan_trip :N, '34th', 6, '28th'
# plan_trip :N, '34th', :N, 'Union Square'
# plan_trip :N, '28th', :N, '28th'
# plan_trip :N, '8th', :N, '23rd'
# plan_trip :L, '8th', :L, '3rd'
# plan_trip :L, '6th', :L, '6th'
# plan_trip :L, '1st', :L, 'Union Square'
# plan_trip 6, '33rd', 6, 'Astor Place'
# plan_trip 6, '23rd', 6, '23rd'
# plan_trip 6, 'Union Square', 6, '33rd'




binding.pry
