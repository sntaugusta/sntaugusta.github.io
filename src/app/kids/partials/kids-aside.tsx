import { Aside } from '@/components/aside';
import { Input } from '@/components/input';

export const KidsAside = () => {
  return (
    <Aside>
      <Input label="Foto" type="file" />
      <Input label="Nome completo da criança" />
      <Input label="Data de nascimento" />
      <Input label="Equipe" />
      <Input label="Nome completo da mãe" />
      <Input label="Nome completo do pai" />
    </Aside>
  );
};
