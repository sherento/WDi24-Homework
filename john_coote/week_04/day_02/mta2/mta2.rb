require 'pry'


stations = {
  'Hornsby' => {
    :name => 'Hornsby',
    :connections => ['Epping', 'Chatswood', 'Brooklyn']
  },
  'Epping' => {
    :name => 'Epping',
    :connections => ['Hornsby', 'Chatswood', 'Strathfield']
  },
  'Chatswood' => {
    :name => 'Chatswood',
    :connections => ['Hornsby', 'Epping', 'Central']
  },
  'Strathfield' => {
    :name => 'Strathfield',
    :connections => ['Lidcombe', 'Epping', 'Central']
  },
  'Bankstown' => {
    :name => 'Bankstown',
    :connections => ['Sydneham', 'Cabramatta','Lidcombe']
  },
  'Cabramatta' => {
    :name => 'Cabramatta',
    :connections => ['Blacktown', 'Bankstown','Lidcombe', 'Glenfield']
  },
  'Sydneham' => {
    :name => 'Sydneham',
    :connections => ['Glenfield', 'Bankstown','Central']
  },
  'Central' => {
    :name => 'Central',
      :connections => ['Chatswood', 'Strathfield', 'Sydneham']
  },
  'Brooklyn' => {
    :name => 'Brooklyn',
    :connections => ['Hornsby']
  },
  'Glenfield' => {
    :name => 'Glenfield',
    :connections => ['Cabramatta','Sydneham']
  },
  'Lidcombe' => {
    :name => 'Lidcombe',
    :connections => ['Cabramatta','Bankstown', 'Strathfield']
  },
  'Blacktown' => {
    :name => 'Blacktown',
    :connections => ['Cabramatta']
  }
} # end of stations hash


# start with a staion - Hornsby - later we'll feed this in via argument.
queue = ['Cabramatta']   # array of stations to examine

list = []                # array of stations visited
trip = []                # array of trip taken

while queue.length > 0
  station_to_examine = queue[0]                         # is this the destination?
  children = stations[station_to_examine][:connections] #if not, get it's children
  children = children - list                            # if children in list remove those
  queue = queue | children

  if list.include? station_to_examine
    queue.shift              # if station_to_examine exists already in list, ignore it
  else                       # and just move on to the next item in the queue.
    list << queue.shift      # if not, append it to list for future examination.
  end

  # for each element in children, add station_to_examine as it's immediate parent
  trip = children.map {|e|  e + ", " + station_to_examine} #gets immediate parent

  # if chilcren.length = 1, just append child to trip
  # if children.length = 2, make a copy of trip[last] and then append childs
  # if children.length = n, make (n-1) copies of trip[last] and then append each child.
  # where trip[last] is the last trip entry which includes parent?


  puts station_to_examine
  puts "queue #{queue}"
  puts "list #{list}"
  binding.pry


end
