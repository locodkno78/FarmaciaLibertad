<template>
  <v-container class="mt-4">
    <v-card class="mx-auto my-8 card" elevation="16" max-width="500">
      <v-card-title class="title">Formulario Receta</v-card-title>
      <v-card-text>
        <v-form ref="formRef" v-model="valid" class="form">
          <v-text-field v-model="formData.nombre" label="Nombre" :rules="[rules.required]" outlined></v-text-field>
          <v-text-field v-model="formData.apellido" label="Apellido" :rules="[rules.required]" outlined></v-text-field>
          <v-text-field v-model="formData.domicilio" label="Domicilio" :rules="[rules.required]" outlined></v-text-field>
          <v-text-field v-model="formData.telefono" label="Teléfono" :rules="[rules.required, rules.phone]" outlined></v-text-field>
          <v-select
            v-model="formData.obraSocial"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Obra Social"
            required
          ></v-select>
          <v-textarea v-model="formData.receta" label="Pegue el Link de su Receta" :rules="[rules.required]" outlined></v-textarea>

          <div class="mt-4 btn">
            <v-btn @click="submit" :disabled="!valid" class="btn1">Enviar</v-btn>
            <v-btn @click="resetForm" class="btn1">Limpiar</v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- Snackbar de éxito -->
    <v-snackbar v-model="snackbar.success" color="green" location="center">
      {{ snackbar.message }}
      <template v-slot:actions>
        <v-btn color="white" text @click="goHome">Aceptar</v-btn>
      </template>
    </v-snackbar>

    <!-- Snackbar de error -->
    <v-snackbar v-model="snackbar.error" color="red" location="center">
      {{ snackbar.message }}
      <template v-slot:actions>
        <v-btn color="white" text @click="snackbar.error = false">Cerrar</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "Recets",
  setup() {
    const router = useRouter();
    const formRef = ref(null);
    const formData = ref({
      nombre: "",
      apellido: "",
      domicilio: "",
      telefono: "",
      receta: "",
      obraSocial: "", // Añadido campo obraSocial
    });

    const items = ref([
      'Subsidio de Salud',
      'PAMI',
      'Boreal',
      'Prensa',
      'Swiss Medical',
      'OSFATUN',
      'Sancor Salud',
      'Prevension Salud',
      'ASUNT',
      'Union Personal',
    ]);

    const snackbar = ref({ success: false, error: false, message: "" });
    const goHome = () => {
      snackbar.value.success = false;
      router.push("/");
    };

    const valid = ref(false);
    const rules = {
      required: (value) => !!value || "Este campo es obligatorio.",
      phone: (value) => /^[0-9]{7,10}$/.test(value) || "Debe ser un número de teléfono válido.",
    };

    const submit = async () => {
      try {
        await addDoc(collection(db, "recetas"), formData.value);
        snackbar.value = {
          success: true,
          error: false,
          message: "Formulario enviado correctamente. En breve nos contactaremos con Ud.",
        };
        resetForm();
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        snackbar.value = {
          success: false,
          error: true,
          message: "Hubo un error al enviar el formulario. Inténtelo nuevamente.",
        };
      }
    };

    const resetForm = () => {
      formData.value = {
        nombre: "",
        apellido: "",
        domicilio: "",
        telefono: "",
        receta: "",
        obraSocial: "", // Añadido campo obraSocial
      };
      if (formRef.value) {
        formRef.value.resetValidation();
      }
    };

    return {
      formData,
      valid,
      rules,
      submit,
      resetForm,
      formRef,
      snackbar,
      goHome,
      items
    };
  },
};
</script>

<style scoped>
.v-container {
  max-width: 600px;
  margin-bottom: 5%;
  overflow-x: hidden;
}

.card {
  border-width: 2px;
  border-color: green;
  margin: 0 auto;
  height: auto;
}

.title {
  font-family: Monserrat;
  font-weight: bolder;
  font-size: 2.5rem;
  background-color: green;
  color: white;
  text-align: center;
  padding: 10px;
}

.form {
  padding-top: 2%;
  font-family: Monserrat;  
}

.btn {
  text-align: center;
}

.btn1 {
  background-color: green;
  color: white;
  margin-left: 5%;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
    margin-top: 20px;
    padding: 10px;
  }

  .title {
    font-size: 1.2rem;
    padding: 8px;
  }

  .btn1 {
    width: 100%;
    margin: 5px 0;
  }
}

@media (max-width: 768px) {
  .v-container {
    padding: 0 20px;
  }
}
</style>