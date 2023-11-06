print("="*42)
print("\tPenjumlahan Pecahan")
print("="*42)

A = int(input("Masukkan nilai (A): "))
B = int(input("Masukkan nilai (B): "))
C = int(input("Masukkan niali (C): "))
D = int(input("Masukkan niali (D): "))

pembilang = A * D + C * B
penyebut = B * D


a, b = pembilang, penyebut
while b:
    a, b = b, a % b

pembilang //= a
penyebut //= a

print("\nHasil\t\t:{pembilang} {penyebut}")
