# Panadería XXX - Backend API
Esta es la API de backend para la panadería XXX, que permite a los clientes realizar pedidos de cajas de panes y al administrador del sitio cargar la información sobre las cajas y ver los pedidos realizados a través del sitio web.

## Arquitectura
La API está desarrollada en Node.js y utiliza Express.js como framework para manejar las rutas y controladores de los endpoints. La base de datos utilizada es PostgreSQL, y se ha utilizado el ORM Sequelize para interactuar con ella. La API se comunica con la base de datos a través de la capa de modelos.

La API sigue un enfoque RESTful, utilizando los verbos HTTP para representar las acciones realizadas en la base de datos. Se han desarrollado los siguientes endpoints:

GET /api/boxes: Obtiene una lista de todas las cajas de pan disponibles en la panadería.
GET /api/orders: Obtiene una lista de todos los pedidos realizados a través del sitio web.
POST /api/orders: Crea un nuevo pedido de una o varias cajas de pan.
GET /api/orders/:id: Obtiene los detalles de un pedido específico, identificado por su ID.
Los datos se envían y reciben en formato JSON, y se ha utilizado la librería Joi para validar los datos en las solicitudes POST.

## Enfoque y metodología
Se ha utilizado un enfoque de desarrollo iterativo e incremental, donde se han ido implementando los diferentes endpoints y funcionalidades a medida que se iban necesitando. Se ha utilizado Git como herramienta de control de versiones, y se han creado diferentes ramas para trabajar en cada nueva funcionalidad.

Se ha utilizado una metodología ágil, realizando reuniones diarias para actualizar el estado del proyecto y tomar decisiones en conjunto. Se han utilizado herramientas como Trello para la gestión del proyecto y la asignación de tareas.

## Posibles mejoras
A continuación, se presentan algunas posibles mejoras que se podrían realizar en la API:

Implementar autenticación y autorización para los diferentes usuarios.
Permitir a los usuarios ver el estado de sus pedidos en tiempo real.
Permitir a los usuarios cancelar sus pedidos en caso de ser necesario.
Implementar una interfaz gráfica para la administración de los datos de la panadería y los pedidos realizados.
Implementar pruebas unitarias y de integración para mejorar la calidad del código y reducir errores.