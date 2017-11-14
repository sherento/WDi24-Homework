############ LINES #########################

train_lines = {
  :L => ['8th Av', '6th Av', 'Union Square', '3rd Av', '1st Av'],
  :N => ['Times Square', '34th', '28th (N)', '23rd (N)', 'Union Square', '8th St'],
  6 => ['Grand Central', '33rd', '28th (6)', '23rd (6)', 'Union Square', 'Astor Place'], # doesn't need :6
  :A => ['50th', 'Port', '23rd (A)', '8th Av', 'W 4th']
};

all_lines = train_lines.keys


# ---------------- Prompt function --------------------- #
def prompt (msg)
  print msg
  gets.chomp.upcase
end

# ------------------------------------------------------ #

# def find_start
#
#
#
# def find_end
