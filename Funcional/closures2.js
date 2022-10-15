const Model = (auditProps) => {
  return (nameModel, propsModel) => {
    const newModel = {
      ...propsModel,
      ...auditProps
    };

    return {
      name: nameModel,
      model: newModel
    };
  }
};

const auditProps = {
  createdAt: new Date(),
  updatedAt: new Date(),
  createdBy: 'Kawaki',
  updatedBy: 'desconocido'
};

const modelCustom = Model(auditProps);

const productoModel = modelCustom('producto', { name: 'pera', costo: 50 });
console.log(productoModel);