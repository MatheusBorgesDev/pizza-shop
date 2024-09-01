import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignInFormSchema = z.object({
  email: z.string().email(),
});

type SignInFormData = z.infer<typeof SignInFormSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema),
  });

  async function handleSignIn(data: SignInFormData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Link de autenticação enviado para seu e-mail", {
        action: {
          label: "Reenviar",
          onClick: () => {
            toast.dismiss();
            handleSignIn(data);
          },
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar link de autenticação");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel parceiro
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" required {...register("email")} />
          </div>

          <Button disabled={isSubmitting} type="submit" className="w-full">
            Acessar painel
          </Button>
        </form>
      </div>
    </>
  );
}
