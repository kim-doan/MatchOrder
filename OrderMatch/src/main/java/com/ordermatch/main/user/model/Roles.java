package com.ordermatch.main.user.model;

import org.apache.ibatis.type.Alias;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Data
@Alias("ROLES")
public class Roles {
	private String roles;
}
