import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { signIn } from "@/api/sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signInFormSchema = z.object({
  email: z.string().email(),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export function SignIn() {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: searchParams.get("email") ?? "",
    },
    resolver: zodResolver(signInFormSchema),
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInFormData) {
    try {
      await authenticate({ email: data.email });

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
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up" className="text-sm text-muted-foreground">
            Cadastrar novo estabelecimento
          </Link>
        </Button>

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
