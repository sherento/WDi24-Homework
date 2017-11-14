require 'pry'

def plan_trip( line, start_station, end_station )
  start_index = get_station_index( line, start_station )
  end_index = get_station_index( line, end_station )

  if start_index == end_index
    p "You're already at #{ end_station } station."
  elsif start_index < end_index
    travel_east( line, start_index, end_index )
  else
    travel_west( line, start_index, end_index )
  end
end

def get_station_index( line, station )
  line.index( station )
end

def travel_east( line, start_index, end_index )
  p "travelling east"
  passed_stations = line[start_index..end_index]
  p passed_stations
end

def travel_west( line, start_index, end_index )
  p "travelling west"
  passed_stations = line[end_index..start_index].reverse  # correct order
  p passed_stations
  binding.pry
end

N = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th"]

plan_trip N, '34th', 'Union Square'
plan_trip N, '28th', '28th'
plan_trip N, '8th', '23rd'
