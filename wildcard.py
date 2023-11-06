pola = input("Masukkan pola: ")
banyak_kata = int(input("Banyak kata: "))

daftar_kata = []

for x in range(1, banyak_kata + 1):
    kata = input(f"Masukkan kata ke-{x}: ")
    i, j = 0, 0

    while i < len(pola) and j < len(kata):
        if pola[i] == '*':
            while i < len(pola) and pola[i] == '*':
                i += 1

            while j < len(kata) and (i == len(pola) or kata[j] != pola[i]):
                j += 1
        elif pola[i] == kata[j]:
            i += 1
            j += 1
        else:
            break

    if i == len(pola) or (i < len(pola) and pola[i] == '*'):
        daftar_kata.append(kata)
print(i)
print("Daftar kata yang cocok:")
for kata in daftar_kata:
    print(kata)
