import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

const CreateCustomer = () => {
  const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [localCustomers, setLocalCustomers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleCreate = (data) => {
    if (editingId) {
      setLocalCustomers(localCustomers.map(customer => 
        customer.id === editingId ? { ...data, id: editingId } : customer
      ));
      setEditingId(null);
    } else {
      const newCustomer = { ...data, id: Date.now().toString() };
      setLocalCustomers([...localCustomers, newCustomer]);
    }
    reset();
  };

  const handleEdit = (id) => {
    const customer = localCustomers.find(customer => customer.id === id);
    if (customer) {
      setValue('name', customer.name);
      setValue('email', customer.email);
      setValue('address', customer.address);
      setEditingId(id);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Customer</Text>

      {/* Name Input */}
      <Controller
        control={control}
        rules={{ required: "Name is required." }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

      {/* Email Input */}
      <Controller
        control={control}
        rules={{
          required: "Email is required.",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Invalid email format.",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      {/* Address Input */}
      <Controller
        control={control}
        rules={{
          required: "Address is required.",
          maxLength: {
            value: 100,
            message: "Address cannot exceed 100 characters.",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="address"
      />
      {errors.address && <Text style={styles.errorText}>{errors.address.message}</Text>}

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.createButton]}
          onPress={handleSubmit(handleCreate)}
        >
          <Text style={styles.buttonText}>{editingId ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </View>

      {/* Customer List */}
      <View style={styles.customerList}>
        {localCustomers.map((customer, index) => (
          <View key={customer.id} style={[styles.customerItem, index % 2 === 0 ? styles.customerItemLeft : styles.customerItemRight]}>
            <TouchableOpacity onPress={() => handleEdit(customer.id)}>
              <Text style={styles.customerText}>{customer.name}</Text>
              <Text style={styles.customerText}>{customer.email}</Text>
              <Text style={styles.customerText}>{customer.address}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 200,
  },
  createButton: {
    backgroundColor: "#007BFF",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  customerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  customerItem: {
    width: '48%',
    padding: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    marginBottom: 10,
  },
  customerItemLeft: {
    marginRight: '2%',
  },
  customerItemRight: {
    marginLeft: '2%',
  },
  customerText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CreateCustomer;
