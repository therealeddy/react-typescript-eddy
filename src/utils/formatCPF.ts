/**
 * Formata String em CPF
 */
export function formatCPF(cpf: string) {
  cpf = cpf.replace(/[^\d]/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Remove formatação CPF
 */
export function DformatCPF(cpf: string) {
  return cpf.replace(/[^\d]/g, '');
}
