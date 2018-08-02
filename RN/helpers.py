import json

#Roman numerals are read from left to right, as you add or subtract the value of each symbol.##
#If a value is lower than the following value, it will be subtracted. Otherwise it will be added. 

def toJSON(self):
    return json.dumps(self, default=lambda o: o.__dict__, 
        sort_keys=True, indent=4)

def romanToArabic(num):
    romanArabicLookup = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    sum = 0
    for i in range(0,len(num)):
        if len(num) == i+1 or romanArabicLookup[num[i]] >= romanArabicLookup[num[i+1]]:
            sum += romanArabicLookup[num[i]]
        else:
            sum -= romanArabicLookup[num[i]]
    return sum
