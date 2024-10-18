import csv
import os

def read_nums(file_path):
    nums = []
    with open(file_path, mode='r') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            row_tuple = []

            for item in row:
                try:
                    number = float(item)
                    row_tuple.append(number)
                except ValueError:
                    pass 
            if row_tuple:
                nums.append(tuple(row_tuple))
    return nums

current_dir = os.path.dirname(__file__)
files = os.path.join(current_dir, 'lucke3d.csv')
nums = read_nums(files)

v = (1, 0) # norma po kateri razdelimo lučke na pol
spredaj = []
zadaj = []

for _,x,y,z in nums:
    print(x,y,z)
    if ((v[0] * x + v[1] * y) > 0):
        spredaj.append((x,y,z))
    else:
        zadaj.append((x,y,z))



def to_csv(file_path, nums):
    with open(file_path, mode='w', newline='') as file:
        csv_writer = csv.writer(file)
        for numbers in nums:
            csv_writer.writerow(numbers)

spredaj_path = os.path.join(current_dir, 'spredaj.csv')
zadaj_path = os.path.join(current_dir, 'zadaj.csv')

to_csv(spredaj_path, spredaj)
to_csv(zadaj_path, zadaj)