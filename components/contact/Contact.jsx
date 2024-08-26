"use client";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form className="contct-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                {...register("name", { required: true })}
              />
              <label className="form-label">Nombre</label>
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Nombre es obligatorio</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="dirección de email"
                {...register(
                  "email",
                  {
                    required: "La dirección de email es obligatoria",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "El valor introducido no es una dirección de email válida.",
                    },
                  },
                  { required: true }
                )}
              />
              <label className="form-label">Email</label>
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Título"
                {...register("subject", { required: true })}
              />
              <label className="form-label">Título</label>
              {errors.subject && (
                <span className="invalid-feedback">El título es obligatorio.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                rows="4"
                className="form-control"
                placeholder="Escriba un mensaje..."
                {...register("comment", { required: true })}
              ></textarea>
              <label className="form-label">Mensaje</label>
              {errors.comment && (
                <span className="invalid-feedback">El mensaje es obligatorio.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-theme">Enviar mensaje</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default Contact;
