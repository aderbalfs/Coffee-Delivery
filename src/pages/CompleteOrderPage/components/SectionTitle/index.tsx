import { ReactNode } from 'react';
import { RegultarText } from '../../../../components/Typography';
import { SectionTitleContainer } from './styles';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon}: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegultarText color="subtitle">{title}</RegultarText>
        <RegultarText size="s">{subtitle}</RegultarText>
      </div>
    </SectionTitleContainer>
  )
}