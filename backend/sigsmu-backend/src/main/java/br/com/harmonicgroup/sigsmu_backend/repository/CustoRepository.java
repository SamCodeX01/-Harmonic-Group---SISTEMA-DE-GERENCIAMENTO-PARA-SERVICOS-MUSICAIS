package br.com.harmonicgroup.sigsmu_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.harmonicgroup.sigsmu_backend.model.Custo;


@Repository
public interface CustoRepository extends JpaRepository<Custo, Integer> {}