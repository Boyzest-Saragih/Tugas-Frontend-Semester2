string1 = input("masukan string pertama : ")
string2 = input("masukan string kedua   : ")

print("="*42)
print("\tHapus Satu Saja")
print("="*42)

print(string1)
print(string2)

for i in range(len(string1)):
    if string1[:i] + string1[i+1:] == string2:
        print("Tentu saja bisa !!")
        break
else:
    print("wah, tidak bisa")