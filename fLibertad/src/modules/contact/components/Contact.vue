<template>
    <v-container>
        <v-card class="mx-auto my-8 card" elevation="16" max-width="500">
            <v-card-title class="title">Formulario de Consulta</v-card-title>
            <form ref="form" @submit.prevent="handleSubmit" class="form-container">
                <!-- Campo de Nombre -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" v-model="formData.name" name="name" required />
                </div>

                <!-- Campo de Email -->
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Ingrese su Email" v-model="formData.email" name="email" required />
                </div>

                <!-- Campo de Asunto -->
                <div class="mb-3">
                    <label for="subject" class="form-label">Asunto</label>
                    <input type="text" class="form-control" id="subject" placeholder="Ingrese su número de teléfono" v-model="formData.subject" name="subject" required />
                </div>

                <!-- Campo de Consulta -->
                <div class="mb-3">
                    <label for="consulta" class="form-label">Consulta</label>
                    <textarea class="form-control" id="consulta" rows="4" placeholder="Escriba su consulta aquí..." v-model="formData.consulta" name="consulta" required></textarea>
                </div>
                <!-- Botón de Enviar -->
                <div class="button-container">
                    <button type="submit" class="btn btn-light" data-bs-toggle="tooltip" title="Enviar consulta">Enviar</button>
                </div>
            </form>
        </v-card>
    </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: "Contact",
    data() {
        return {
            formData: {
                name: "",
                email: "",
                subject: "",
                consulta: ""
            }
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const templateParams = {
                    name: this.formData.name,
                    email: this.formData.email,
                    subject: this.formData.subject,
                    consulta: this.formData.consulta
                };

                const response = await emailjs.send(
                    'service_2rkajbo', // Reemplaza con tu service_id
                    'template_cyac8k3', // Reemplaza con tu template_id
                    templateParams,
                    '4h5FS7XLOdsa7cUsI' // Reemplaza con tu user_id
                );

                if (response.status === 200) {
                    // Mostrar mensaje de alerta
                    alert('Consulta enviada');

                    // Resetear el formulario
                    this.formData = {
                        name: '',
                        email: '',
                        subject: '',
                        consulta: ''
                    };
                } else {
                    alert('Hubo un problema al enviar la consulta. Por favor, inténtelo de nuevo.');
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                alert('Hubo un problema al enviar la consulta. Por favor, inténtelo de nuevo.');
            }
        }
    }
};
</script>

<style scoped>
.card {
    border-width: 2px;
    border-color: green;
    margin: 0 auto;
    height: auto;
}

.title {
    font-family: Monserrat;
    font-weight: bolder;
    font-size: 2rem;
    background-color: green;
    color: white;
    text-align: center;
    padding: 5px;
}

.form-container {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px; /* Ajusta este valor según sea necesario */
    margin: 0 auto 20px auto; /* Centra el formulario horizontalmente y añade margen inferior */
    transition: background-color 0.3s ease; /* Añade una transición suave */
}

.form-container:hover {
    background-color: white; /* Cambia el fondo a blanco cuando se posiciona sobre el formulario */
}

.form-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: green;
}

.form-control {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
}

.form-control:focus {
    border-color: green;
    box-shadow: 0 0 5px rgba(0, 128, 0, 0.5);
}

.button-container {
    display: flex;
    justify-content: center;
}

.btn {
    background-color: green;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: darkgreen;
}

@media (max-width: 600px) {
    .form-title {
        font-size: 1.5rem;
    }

    .form-container {
        padding: 15px;
        max-width: 100%; /* Asegura que el formulario ocupe el ancho completo en pantallas pequeñas */
    }

    .form-label {
        font-size: 0.9rem;
    }

    .form-control {
        font-size: 0.9rem;
    }

    .btn {
        font-size: 0.9rem;
        padding: 8px 16px;
    }
}
</style>