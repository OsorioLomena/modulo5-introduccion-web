# Ejercicio 2 - Sumar solo pares 

puts "Ingresar número :" 
n = gets.to_i
puts "-".center(2, "-")
suma = 0
num_par = []
arr = []
for i in 1..n do
    
    num_par = rand(1..100) # entrega numeros 
        if num_par % 2 == 0  # averiguamos si es par
        arr << num_par
        suma += num_par
    end
end
# for i in 0..n-1
#     if num_par[i] % 2 == 0
#         print "#{num_par[i]} +"
#         puts "-".center(2, " - ")
#     end
# end
# puts "La suma de los pares al azar es #{suma}"
# print "Los numeros pares sumados son #{arr}, "

# resolver impresión de todos los números separados por comas
for i in 0..n-1
    if i == n-1 # estoy en la última vuelta???
        print num_par[i]            # imprimir solo el número
    else
        print "#{num_par[i]}, "     # resolviendo el problema de imprimir en la misma línea
    end
end
puts        # resuelve el problema de mostrar el %

# resolver impresión de solo pares con + y =
for i in 0..n-1
    if numeros_totales[i] % 2 == 0
        print "#{num_par[i]} + "
    end
    
    if i == n-1
        print " = #{suma}"
    end
end

for i in 0..n-1
    if num_par[i] % 2 == 0
        print "#{num_par[i]} + "
    end
    
    if i == n-1
        print " = #{suma}"
    end
end


# # resolver impresión de todos los números separados por comas
# for i in 0..n-1
#     if i == n-1 # estoy en la última vuelta???
#         print numeros_totales[i]            # imprimir solo el número
#     else
#         print "#{numeros_totales[i]}, "     # resolviendo el problema de imprimir en la misma línea
#     end
# end
# puts        # resuelve el problema de mostrar el %

# # resolver impresión de solo pares con + y =
# for i in 0..n-1
#     if numeros_totales[i] % 2 == 0
#         print "#{numeros_totales[i]} + "
#     end
    
#     if i == n-1
#         print " = #{suma}"
#     end
# end



