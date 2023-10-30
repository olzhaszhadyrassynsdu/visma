import { purpleArrow } from "@/assets/icons";
import { FormInput } from "@/shared/ui/fields/input";
import { FormSelect } from "@/shared/ui/fields/select";
import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const ContactsForm: FC = () => {
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const FormValidation = z.object({
    name: z
      .string()
      .min(2, { message: "this field must contain at least 2 characters" }),
    size: z.string().min(1, { message: "this field is required" }),
    units: z.object({
      value: z.string().min(1, { message: " " }),
      label: z.string(),
    }),
    destination: z.object({
      value: z.string().min(1, { message: " " }),
      label: z.string(),
    }),
    arrival: z.string().optional(),
    period: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .optional(),
    cargoin: z.object({ value: z.string(), label: z.string() }).optional(),
    cargoout: z.object({ value: z.string(), label: z.string() }).optional(),
    portion: z.string().optional(),
    danger: z.string().optional(),
    fullName: z.string().optional(),
    companyName: z.string().min(1, { message: "this field is required" }),
    phone: z
      .string()
      .regex(phoneRegex, "Invalid Number!")
      .min(1, { message: "this field is required" }),
    email: z
      .string()
      .min(1, { message: "this field is required" })
      .email("This is not a valid email."),
    additionalInfo: z.string().optional(),
  });

  type Form = z.infer<typeof FormValidation>;

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];
  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log("test", data);
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    mode: "onChange",
    resolver: zodResolver(FormValidation),
  });

  return (
    <section className="my-16 mx-48 p-8">
      <h1 className="text-center text-3xl font-bold">
        Запрос ставки и условий погрузочно-разгрузочных работ
      </h1>
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2">
          <div>
            <FormInput title="Наименование груза *" {...register("name")} />
            {errors.name && (
              <p className="text-xs italic text-red-500 ml-8">
                {" "}
                {errors.name?.message}
              </p>
            )}
          </div>
          <div>
            <FormInput title="Размер партии *" {...register("size")} />
            {errors.size && (
              <p className="text-xs italic text-red-500 ml-8">
                {" "}
                {errors.size?.message}
              </p>
            )}
          </div>
          <div>
            <Controller
              name="units"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <FormSelect
                  title="Ед. измерения *"
                  options={options}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            {errors.units && (
              <p className="text-xs italic text-red-500 ml-8">
                {" "}
                {errors.units?.message}
              </p>
            )}
          </div>
          <div>
            <Controller
              name="destination"
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <FormSelect
                  title="Направление перевозки *"
                  options={options}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            {errors.destination && (
              <p className="text-xs italic text-red-500 ml-8">
                {" "}
                {errors.destination?.message}
              </p>
            )}
          </div>
          <FormInput
            title="Пункт назначения перевозки"
            {...register("arrival")}
          />
          <Controller
            name="period"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <FormSelect
                title="Период поступления груза к перевалке"
                options={options}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            name="cargoin"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <FormSelect
                title="Груз поступает в порт"
                options={options}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            name="cargoout"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <FormSelect
                title="Груз отправляется из порта"
                options={options}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <FormInput title="Размер судовой партии" {...register("portion")} />
          <FormInput title="Опасность груза (класс)" {...register("danger")} />
          <div className="ml-8 mt-4">
            <label htmlFor="text" className="block font-bold mb-4">
              Дополнительная информация о грузе:
            </label>
            <textarea
              id="text"
              className="w-[400px] h-[200px] border-2 border-[#eaeaea]"
              {...register("additionalInfo")}
            />
          </div>
          <div className="ml-8 mt-4">
            <label htmlFor="file" className="block font-bold mb-4">
              Прикрепить файл
            </label>
            <input type="file" id="file" className="font-bold"></input>
          </div>
        </div>
        <div>
          <p className="ml-8 mt-14 text-xl font-bold">
            Информация для обратной связи:
          </p>
          <div className="grid grid-cols-2">
            <div>
              <FormInput title="Имя, Фамилия" {...register("fullName")} />
            </div>
            <div>
              <FormInput
                title="Название компании *"
                {...register("companyName")}
              />
              {errors.companyName && (
                <p className="text-xs italic text-red-500 ml-8">
                  {" "}
                  {errors.companyName?.message}
                </p>
              )}
            </div>
            <div>
              <FormInput
                title="Номер телефона/факса *"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-xs italic text-red-500 ml-8">
                  {" "}
                  {errors.phone?.message}
                </p>
              )}
            </div>
            <div>
              <FormInput title="Адрес эл. почты *" {...register("email")} />
              {errors.email && (
                <p className="text-xs italic text-red-500 ml-8">
                  {" "}
                  {errors.email?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <button className="mt-14 ml-8 flex justify-center items-center">
          <h1 className="font-bold text-[#3D348B] text-lg">Oтправить</h1>
          <img
            src={purpleArrow}
            className="p-1 border-2 border-[#3D348B] rounded-full ml-2"
          />
        </button>
      </form>
    </section>
  );
};
