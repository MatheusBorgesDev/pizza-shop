import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpFormData = z.infer<typeof signUpFormSchema>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  async function handleSignUp(data: SignUpFormData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(data);

      toast.success("Cadastro realizado com sucesso", {
        action: {
          label: "Fazer login",
          onClick: () => {
            navigate("/sign-in");
          },
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar estabelecimento");
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in" className="text-sm text-muted-foreground">
            Fazer login
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece a vender online
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleSignUp)} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input
              id="restaurantName"
              type="text"
              required
              {...register("restaurantName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Nome do responsável</Label>
            <Input
              id="managerName"
              type="text"
              required
              {...register("managerName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" required {...register("email")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" type="tel" required {...register("phone")} />
          </div>

          <Button disabled={isSubmitting} type="submit" className="w-full">
            Cadastrar
          </Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao se cadastrar, você concorda com nossos{" "}
            <Link to="#" className="text-primary">
              Termos de uso
            </Link>{" "}
            e{" "}
            <Link to="#" className="text-primary">
              Política de privacidade.
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
