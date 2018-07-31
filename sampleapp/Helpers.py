import json


def toJSON(self):
    return json.dumps(self, default=lambda o: o.__dict__, 
        sort_keys=True, indent=4)

def romanToArabic(num):
    romanArabicLookup = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    sum = 0
    for i in range(0,len(num)):
        if len(num) == i+1 or romanArabicLookup[num[i]] >= romanArabicLookup[num[i+1]]:
            sum += romanArabicLookup[num[i-1]]
            print("add")
        else:
            sum -= romanArabicLookup[num[i-1]]
            print("sub")

        print(romanArabicLookup[num[i-1]])
    return sum
