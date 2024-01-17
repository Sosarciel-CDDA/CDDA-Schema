'''
typetest
'''
from typing import Literal, Optional, Union, TypeVar, List, TypedDict, Tuple, Dict, Any, Type
from attrs import define, field

AmmunitionTypeID = Literal["Ammo1", "Ammo2"]

@define
class GenericMix():
    '''Generic'''
    id:float
    '''Generic的id'''

@define
class Generic(GenericMix):
    '''Generic'''
    type:Literal["GENERIC"] = field(default="GENERIC")
    '''Generic的id'''

@define
class Ammo(GenericMix):
    '''Ammo'''
    type:Literal["AMMO"] = field(default="AMMO")
    '''Ammo的type'''
    ammo_type:Optional[AmmunitionTypeID] = field(default=None)
    '''Ammo的ammo_type'''

CddaList = List[Union[Generic,Ammo]]

T = TypeVar('T')
Maybe = Union[T, type(None)]
MyList =  List[Maybe[T]]
lista: MyList[Literal["123"]] = ["123",None,"123"]


class Math(TypedDict):
    '''Math'''
    math:Tuple[str,Literal["=","+="],str]

class SpawnItem(TypedDict):
    '''SpawnItem'''
    spawn_item:str

TC = TypeVar('TC', bound=type)
def create_class(name: str, base: type, attr_name: str) -> type:
    '''test'''
    attrs: Dict[str, Any] = {attr_name: ''}
    return type(name, (base,), attrs)

USpawnItem = create_class('USpawnItem', SpawnItem, 'u_spawn_item')
NSpawnItem = create_class('NSpawnItem', SpawnItem, 'n_spawn_item')



AnyEffect = Union[Math,SpawnItem,USpawnItem]
AnyEffectList = List[AnyEffect]

effs: AnyEffectList=[
    {'math':("123","+=","223")},
    {'spawn_item':"123"},
]

print(lista)
