const residentsData = {
  residents: [
    {
      _id: '63667e8d62758833c693d3de',
      nombre: 'Franky',
      identificacion: '8-888-888',
      correo: 'franky@test.com',
      telefono: '789-456',
      listanegra: false,
      casa: 'A207',
      estado: true,
    },
    {
      _id: '63667f4acfa67405c3fdc618',
      nombre: 'Yoa',
      identificacion: '8-920-453',
      correo: 'yoa@test.com',
      telefono: '123-456',
      listanegra: true,
      casa: 'A208',
      estado: true,
    },
    {
      _id: '640aa211c04d44dbfbdbdc58',
      nombre: 'fran',
      identificacion: '8-920-788',
      correo: 'fran@test.com',
      telefono: '123-4546',
      listanegra: false,
      casa: 'A209',
      estado: true,
    },
    {
      _id: '640b9f688694a49e10a078d5',
      nombre: 'adan',
      identificacion: '8-920-000',
      correo: 'adan@test.com',
      telefono: '123-4546',
      listanegra: false,
      casa: 'A210',
      estado: true,
    },
    {
      _id: '640b9f688694a49e10a078d7',
      nombre: 'Hector',
      identificacion: '8-920-000',
      correo: 'gestor@test.com',
      telefono: '123-4546',
      listanegra: false,
      casa: 'A211',
      estado: false,
    },
  ],
  totalResidents: 5,
  uid: '63653fef17f367ab24522e07',
  ok: true,
};

// Simulamos la respuesta de una API para la operación de lectura (GET)
export const getResidents = () => residentsData;

// Simulamos la respuesta de una API para la operación de creación (POST)
export const createResident = (resident: any) => {
  const newResident = {
    _id: '63667e8d62758833c693d3de',
    nombre: 'Franky',
    identificacion: '8-888-888',
    correo: 'franky@test.com',
    telefono: '789-456',
    listanegra: false,
    casa: 'A207',
    estado: true,
  };
  residentsData.residents.push(newResident);
  return newResident;
};


// Simulamos la respuesta de una API para la operación de edición (PUT)
export const updateResident = (id: string, resident: any) => {
  const index = residentsData.residents.findIndex(u => u._id === id);
  residentsData.residents[index] = { ...residentsData.residents[index], ...resident };
  return residentsData.residents[index];
};


// Simulamos la respuesta de una API para la operación de eliminación (DELETE)
export const deleteResident = (id: string) => {
  const index = residentsData.residents.findIndex(u => u._id === id);
  const deletedResident = residentsData.residents.splice(index, 1)[0];
  return deletedResident;
};
